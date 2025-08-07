export default function DoctorCard({ doctor }) {
    return (
        <div className="border p-4 rounded shadow-sm bg-white">
            <h3 className="text-xl font-bold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty} • {doctor.experience} years experience</p>
            <p>{doctor.location} • ₹{doctor.fee} fee</p>
            <p>{doctor.rating}% • {doctor.patientStories} Patient Stories</p>
            {doctor.availableToday && <p className="text-green-600">Available Today</p>}
            <div className="mt-2 flex gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">Book Clinic Visit</button>
                <button className="border px-3 py-1 rounded">Contact Clinic</button>
            </div>
        </div>
    );
}