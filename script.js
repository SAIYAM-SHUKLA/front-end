// document.getElementById('studentForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Collecting form data
//     const formData = {
//         studentName: document.getElementById('studentName').value.trim(),
//         email: document.getElementById('email').value.trim(),
//         eno: document.getElementById('eno').value.trim(),
//         branch: document.getElementById('branch').value.trim(),
//         yearOfStudy: document.getElementById('yearOfStudy').value.trim(),
//         contactNo: document.getElementById('contactNo').value.trim(),
//         address: document.getElementById('address').value.trim(),
//         dateOfBirth: document.getElementById('dateOfBirth').value.trim(),
//         gender: document.getElementById('gender').value.trim(),
//         bloodGroup: document.getElementById('bloodGroup').value.trim(),
//         photo: document.getElementById('photo').value.trim(),
//         signature: document.getElementById('signature').value.trim(),
//         CGPA: document.getElementById('CGPA').value.trim(),
//         attendance: document.getElementById('attendance').value.trim(),
//         SGPA: document.getElementById('SGPA').value.split(',').map(semester => ({ semester: semester.trim() })),
//         backLogs: document.getElementById('backLogs').value.trim(),
//         midTermMarks: document.getElementById('midTermMarks').value.split(',').map(mark => mark.trim()),
//         projects: document.getElementById('projects').value.split(',').map(project => project.trim()),
//         skills: document.getElementById('skills').value.split(',').map(skill => skill.trim()),
//         achievements: document.getElementById('achievements').value.split(',').map(achievement => achievement.trim()),
//         hobbies: document.getElementById('hobbies').value.split(',').map(hobby => hobby.trim()),
//         languages: document.getElementById('languages').value.split(',').map(lang => lang.trim()),
//         behaviourAnalytics: document.getElementById('behaviourAnalytics').value.split(',').map(behavior => behavior.trim()),
//         studentScore: document.getElementById('studentScore').value.trim()
//     };

//     // Log the final formData
//     console.log('Form Data:', formData);

//     // Perform the POST request to backend
//     fetch('https://backend-x4en.onrender.com/api/create-student', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         alert('Student created successfully!');
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Error occurred while creating student.');
//     });
// });
