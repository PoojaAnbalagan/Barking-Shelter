from django.urls import path
from .views import DogListCreateView, DogRetrieveUpdateDestroyView

urlpatterns = [
    path('dogs/', DogListCreateView.as_view(), name='dog-list-create'),
    path('dogs/delete/<int:id>/', DogRetrieveUpdateDestroyView.as_view(), name='dog-delete'),
    path('dogs/<int:id>/', DogRetrieveUpdateDestroyView.as_view(), name='dog-detail'),
]