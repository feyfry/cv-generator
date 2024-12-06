import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const CVPreview = forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className="bg-white p-8 rounded-lg shadow w-full max-w-4xl mx-auto font-sans print:p-6">
            {/* Header */}
            <div className="mb-8 flex justify-between items-start print:mb-6">
                <div className="max-w-[60%]">
                    <h1 className="text-4xl font-bold mb-2 font-sans print:text-2xl">{data.personalInfo.fullName || 'Muhammad Faiz'}</h1>
                    <h2 className="text-pink-800 text-xl print:text-base">{data.personalInfo.title || 'Fullstack Developer'}</h2>
                </div>
                <div className="text-right justify-start space-y-2 print:space-y-1">
                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 print:text-xs">
                        <Phone size={16} className="print:w-3 print:h-3" />
                        <span>{data.personalInfo.phone || '08999991140'}</span>
                    </div>
                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 print:text-xs">
                        <Mail size={16} className="print:w-3 print:h-3" />
                        <span>{data.personalInfo.email || 'feifeifry@gmail.com'}</span>
                    </div>
                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 print:text-xs">
                        <Globe size={16} className="print:w-3 print:h-3" />
                        <span>{data.personalInfo.portfolio || 'portfolio.vespertine.my.id'}</span>
                    </div>
                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 print:text-xs">
                        <MapPin size={16} className="print:w-3 print:h-3" />
                        <span>{data.personalInfo.address || 'Kebayoran Baru, Jakarta Selatan'}</span>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="mb-8 print:mb-6">
                <h2 className="text-xl font-bold border-b-2 pb-2 mb-4 tracking-[0.2em] print:pb-3 print:mb-4">PENGALAMAN</h2>
                {data.experiences.map((exp) => (
                    <div key={exp.id} className="mb-4 print:mb-3">
                        <div className="flex justify-between items-start mb-2 print:mb-1">
                            <div>
                                <h3 className="text-pink-800 mb-1 print:text-sm">{exp.title}</h3>
                                <p className="text-gray-600 print:text-xs">{exp.company}</p>
                            </div>
                            <span className="text-gray-500 print:text-xs">{exp.period}</span>
                        </div>
                        <ul className="list-none pl-5 space-y-1 print:text-xs print:space-y-0.5">
                            {exp.description.split('\n').map((item, index) => (
                                item && <li key={index} className="text-gray-800 relative before:content-[''] before:w-[5px] before:h-[5px] before:bg-gray-500 before:rounded-full before:absolute before:-left-4 before:top-[0.6em] before:-translate-y-1/2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Education */}
            <div className="mb-8 print:mb-6">
                <h2 className="text-xl font-bold border-b-2 pb-2 mb-4 tracking-[0.2em] print:pb-3 print:mb-4">PENDIDIKAN</h2>
                <div className="mb-4 print:mb-2">
                    <div className="flex justify-between items-start mb-1">
                        <div>
                            <h3 className="text-pink-800 mb-1 print:text-sm">{data.education.major}</h3>
                            <p className="text-gray-600 print:text-xs">{data.education.university}</p>
                        </div>
                        <span className="text-gray-500 print:text-xs">{data.education.period}</span>
                    </div>
                    <p className="text-gray-800 mt-1 print:text-xs">{data.education.status}</p>
                </div>
            </div>

            {/* Skills */}
            <div className="mb-8 print:mb-6">
                <h2 className="text-xl font-bold border-b-2 pb-2 mb-4 tracking-[0.2em] print:pb-3 print:mb-4">KEAHLIAN</h2>
                <ul className="list-none pl-5 grid grid-cols-1 gap-2 print:gap-1">
                    {data.skills.filter(Boolean).map((skill, index) => (
                        <li key={index} className="text-gray-800 relative before:content-[''] before:w-[5px] before:h-[5px] before:bg-gray-500 before:rounded-full before:absolute before:-left-4 before:top-[0.6em] before:-translate-y-1/2">{skill}</li>
                    ))}
                </ul>
            </div>

            {/* Languages */}
            <div>
                <h2 className="text-xl font-bold border-b-2 pb-2 mb-4 tracking-[0.2em] print:pb-3 print:mb-4">BAHASA</h2>
                <div className="grid grid-cols-3 gap-4 print:gap-3">
                    {data.languages.filter(lang => lang.name).map((lang, index) => (
                        <div key={index} className="flex flex-col items-center justify-between">
                            <p className="font-medium print:text-sm">{lang.name}</p>
                            <p className="text-gray-500 text-sm print:text-xs">{lang.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

CVPreview.propTypes = {
    data: PropTypes.shape({
        personalInfo: PropTypes.shape({
            fullName: PropTypes.string,
            title: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            portfolio: PropTypes.string,
            address: PropTypes.string
        }),
        experiences: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            company: PropTypes.string,
            period: PropTypes.string,
            description: PropTypes.string
        })),
        education: PropTypes.shape({
            major: PropTypes.string,
            university: PropTypes.string,
            period: PropTypes.string,
            status: PropTypes.string
        }),
        skills: PropTypes.arrayOf(PropTypes.string),
        languages: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            level: PropTypes.string
        }))
    }).isRequired
};

CVPreview.displayName = 'CVPreview';

export default CVPreview;