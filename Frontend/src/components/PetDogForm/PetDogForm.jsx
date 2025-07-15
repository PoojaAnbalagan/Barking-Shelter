import { useState, useEffect } from "react";
import api from "../../api";
import Dog from "../Dog/Dog";
import "./PetDogForm.css";

function PetDogForm() {
    const [dogs, setDogs] = useState([]);
    const [formData, setFormData] = useState({
        dogID: "",
        dogName: "",
        age: "",
        breed: "",
        dogType: "withOwner", // default to 'withOwner'
        description: "",
        image: null,
        ownerName: "",
        ownerPhone: "",
        ownerEmail: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchDogs();
    }, []);

    const fetchDogs = () => {
        setIsLoading(true);
        api.get("/api/dogs/")
            .then((res) => {
                setDogs(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                // alert("Error fetching dogs: " + err);
                setIsLoading(false);
            });
    };

    const deleteDog = (id) => {
        if (window.confirm("Are you sure you want to delete this dog?")) {
            api.delete(`/api/dogs/delete/${id}/`)
                .then((res) => {
                    if (res.status === 204) {
                        alert("Dog deleted successfully!");
                        fetchDogs();
                    }
                })
                .catch((error) => alert("Error deleting dog: " + error));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData();
        data.append("dogID", formData.dogID);
        data.append("dogName", formData.dogName);
        data.append("age", formData.age);
        data.append("breed", formData.breed);
        data.append("dogType", formData.dogType);
        data.append("description", formData.description);
        if (formData.image) {
            data.append("image", formData.image);
        }
        data.append("ownerName", formData.ownerName);
        data.append("ownerPhone", formData.ownerPhone);
        data.append("ownerEmail", formData.ownerEmail);

        api.post("/api/dogs/", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            if (res.status === 201) {
                alert("Dog added successfully!");
                setFormData({
                    dogID: "",
                    dogName: "",
                    age: "",
                    breed: "",
                    dogType: "withOwner",
                    description: "",
                    image: null
                });
                 document.getElementById("image").value = "";
                fetchDogs();
            }
        })
        // .catch((err) => alert("Error adding dog: " + err));
    };

    return (
        <div className="pet-dogs-container">
        
            
            <div className="dogs-list">
               
                {isLoading ? (
                    <p>Loading dogs...</p>
                ) : dogs.length === 0 ? (
                    <p>No dogs registered yet.</p>
                ) : (
                    <div className="dog-cards">
                        {dogs.map((dog) => (
                            <Dog 
                                dog={dog} 
                                onDelete={deleteDog} 
                                key={dog.dogID} 
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="add-dog-form">
                <h2 className="Title1">Add a New Dog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="dogID">Dog ID:</label>
                        <input
                            type="text"
                            id="dogID"
                            name="dogID"
                            required
                            value={formData.dogID}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dogName">Dog Name:</label>
                        <input
                            type="text"
                            id="dogName"
                            name="dogName"
                            required
                            value={formData.dogName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            min="0"
                            required
                            value={formData.age}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="breed">Breed:</label>
                        <input
                            type="text"
                            id="breed"
                            name="breed"
                            required
                            value={formData.breed}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dogType">Dog Type:</label>
                        <select
                            id="dogType"
                            name="dogType"
                            value={formData.dogType}
                            onChange={handleInputChange}
                        >
                            <option value="withOwner">With Owner</option>
                            <option value="stray">Stray Dog</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="4"
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Dog Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    {formData.dogType === "withOwner" && (
    <div className="owner-details-section">
        <h2 className="Title1">Add Pet Owner Details</h2>
        
        <div className="form-group">
            <label htmlFor="ownerName">Owner Name:</label>
            <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
            />
        </div>

        <div className="form-group">
            <label htmlFor="ownerPhone">Phone:</label>
            <input
                type="tel"
                id="ownerPhone"
                name="ownerPhone"
                value={formData.ownerPhone}
                onChange={handleInputChange}
            />
        </div>

        <div className="form-group">
            <label htmlFor="ownerEmail">Email:</label>
            <input
                type="email"
                id="ownerEmail"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleInputChange}
            />
        </div>
    </div>
)}

    <button type="submit" className="submit-btn">
                        Add Dog
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PetDogForm;