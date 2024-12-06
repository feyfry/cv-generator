import PropTypes from 'prop-types';

const CVForm = ({ data, onChange }) => {
    const handlePersonalInfoChange = (field, value) => {
        onChange({
            ...data,
            personalInfo: {
                ...data.personalInfo,
                [field]: value,
            },
        });
    };

    const handleExperienceChange = (index, field, value) => {
        const newExperiences = [...data.experiences];
        newExperiences[index] = {
            ...newExperiences[index],
            [field]: value,
        };
        onChange({
            ...data,
            experiences: newExperiences,
        });
    };

    const addExperience = () => {
        onChange({
            ...data,
            experiences: [
                ...data.experiences,
                {
                    id: Date.now().toString(),
                    title: '',
                    company: '',
                    period: '',
                    description: '',
                },
            ],
        });
    };

    const handleEducationChange = (field, value) => {
        onChange({
            ...data,
            education: {
                ...data.education,
                [field]: value,
            },
        });
    };

    const handleSkillChange = (index, value) => {
        const newSkills = [...data.skills];
        newSkills[index] = value;
        onChange({
            ...data,
            skills: newSkills,
        });
    };

    const addSkill = () => {
        onChange({
            ...data,
            skills: [...data.skills, ''],
        });
    };

    const handleLanguageChange = (index, field, value) => {
        const newLanguages = [...data.languages];
        newLanguages[index] = {
            ...newLanguages[index],
            [field]: value,
        };
        onChange({
            ...data,
            languages: newLanguages,
        });
    };

    const addLanguage = () => {
        onChange({
            ...data,
            languages: [
                ...data.languages,
                { name: '', level: '' }
            ],
        });
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded"
                        value={data.personalInfo.fullName}
                        onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Title (e.g., Web Developer)"
                        className="w-full p-2 border rounded"
                        value={data.personalInfo.title}
                        onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={data.personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full p-2 border rounded"
                        value={data.personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                    />
                    <input
                        type="url"
                        placeholder="Portfolio URL"
                        className="w-full p-2 border rounded"
                        value={data.personalInfo.portfolio}
                        onChange={(e) => handlePersonalInfoChange('portfolio', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-full p-2 border rounded"
                        value={data.personalInfo.address}
                        onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                {data.experiences.map((exp, index) => (
                    <div key={exp.id} className="mb-4 space-y-4">
                        <input
                            type="text"
                            placeholder="Job Title"
                            className="w-full p-2 border rounded"
                            value={exp.title}
                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            className="w-full p-2 border rounded"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Period"
                            className="w-full p-2 border rounded"
                            value={exp.period}
                            onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                        />
                        <textarea
                            placeholder="Description"
                            className="w-full p-2 border rounded h-32"
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                        />
                    </div>
                ))}
                <button
                    onClick={addExperience}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Experience
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Major"
                        className="w-full p-2 border rounded"
                        value={data.education.major}
                        onChange={(e) => handleEducationChange('major', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="University"
                        className="w-full p-2 border rounded"
                        value={data.education.university}
                        onChange={(e) => handleEducationChange('university', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Period"
                        className="w-full p-2 border rounded"
                        value={data.education.period}
                        onChange={(e) => handleEducationChange('period', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Status"
                        className="w-full p-2 border rounded"
                        value={data.education.status}
                        onChange={(e) => handleEducationChange('status', e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                {data.skills.map((skill, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder="Skill"
                        className="w-full p-2 border rounded mb-2"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                    />
                ))}
                <button
                    onClick={addSkill}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Skill
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Languages</h2>
                {data.languages.map((lang, index) => (
                    <div key={index} className="mb-4 grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Language Name"
                            className="w-full p-2 border rounded"
                            value={lang.name}
                            onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Level (e.g., Aktif, Pasif)"
                            className="w-full p-2 border rounded"
                            value={lang.level}
                            onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                        />
                    </div>
                ))}
                <button
                    onClick={addLanguage}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Language
                </button>
            </div>
        </div>
    );
};

CVForm.propTypes = {
    data: PropTypes.shape({
        personalInfo: PropTypes.shape({
            fullName: PropTypes.string,
            title: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            portfolio: PropTypes.string,
            address: PropTypes.string
        }).isRequired,
        experiences: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            company: PropTypes.string,
            period: PropTypes.string,
            description: PropTypes.string
        })).isRequired,
        education: PropTypes.shape({
            major: PropTypes.string,
            university: PropTypes.string,
            period: PropTypes.string,
            status: PropTypes.string
        }).isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        languages: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            level: PropTypes.string
        })).isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired
};

export default CVForm;