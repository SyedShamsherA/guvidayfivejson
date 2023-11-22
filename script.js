document.addEventListener('DOMContentLoaded', function(){
    const resumeData = {
        "Name": "Syed Shamsher Ali",
        "Email": "syedshamsher9174@gmail.com",
        "Phone": "7987418498",
        "Address": "114/19, Gazi Nagar, Jabalpur, Madhya Pradesh, India",
        "Summary": "Experienced Associate Software Developer with knowledge in Javascript, React, React-Native, HTML, CSS",
        "Education": [
            {
                "Degree": "Bachelor of Electronics and Communication Engineering",
                "School": "Global Nature Care Sanghathan Group of Institutions",
                "graduationYear":2019
            }
        ],
        "Experience":[
            {
                "title": "Associate Software Engineer",
                "company":"Mosphe. Pvt Ltd",
                "startDate":"2022-05-16",
                "endDate":"2023-06-30",
                "responsibilities": [
                    "Developed scalable website and applications User Interface using React.js and React-Native",
                    "Collaborated with cross-functional teams for product development"
                ]
            },
            {
                "title": "Programmer Trainee",
                "company": "Integra Software Pvt Ltd",
                "startDate": "2021-10-07",
                "endDate": "2022-03-06",
                "responsibilities": [
                    "Work on front-end development using React.js",
                    "Fetch Api data and Json data using HTTP method like Get, Post, Put and Delete"
                ]
            }
        ],
        "Skills": [
            "Javascript",
            "React.js",
            "React-Native",
            "HTML",
            "CSS"
        ]
    };
    console.log(resumeData)

    const resumeContainer = document.getElementById('resume');

    const nameElement = document.createElement('h2');
    nameElement.textContent = resumeData.Name;
    resumeContainer.appendChild(nameElement);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = `Email: ${resumeData.Email} | Phone: ${resumeData.Phone} | Address: ${resumeData.Address}`
    resumeContainer.appendChild(contactInfo);

    const summaryElement = document.createElement('p');
    summaryElement.textContent = resumeData.Summary;
    resumeContainer.appendChild(summaryElement);

    const educationSection = document.createElement('div');
    educationSection.innerHTML = '<h3>Education</h3>';
    resumeContainer.appendChild(educationSection);

    resumeData.Education.forEach(Education => {
        const eduElement = document.createElement('p');
        eduElement.textContent = `${Education.Degree} - ${Education.School} (${Education.graduationYear})`
        educationSection.appendChild(eduElement)
    });

    const experienceSection = document.createElement('div');
    experienceSection.innerHTML = '<h3>Experience</h3>';
    resumeContainer.appendChild(experienceSection)

    resumeData.Experience.forEach(Experience => {
        const expElement = document.createElement('div');
        expElement.innerHTML = `
        <h4>${Experience.title}</h4>
        <p>${Experience.company} (${Experience.startDate} - ${Experience.endDate})</p>
        <ul>
         ${Experience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
        `;
        experienceSection.appendChild(expElement);
    });

    const skillsSection = document.createElement('div');
    skillsSection.innerHTML = '<h3>Skills</h3>';
    resumeContainer.appendChild(skillsSection);

    const skillsList = document.createElement('ul');
    resumeData.Skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem)
    });
    skillsSection.appendChild(skillsList);
})
