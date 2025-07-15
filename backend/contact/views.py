from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ContactSubmission
import json

@csrf_exempt  # Disable CSRF for simplicity (enable in production)
def submit_contact(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  # Parse JSON data from React
            ContactSubmission.objects.create(
                name=data['name'],
                email=data['email'],
                message=data['message']
            )
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)