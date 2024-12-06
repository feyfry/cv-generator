// CVBuilder.jsx
import { useState, useRef } from 'react';
import CVForm from './CVForm';
import CVPreview from './CVPreview';
import ActionButtons from './ActionButtons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CVBuilder = () => {
    const [cvData, setCVData] = useState({
        personalInfo: {
            fullName: '',
            title: '',
            email: '',
            phone: '',
            portfolio: '',
            address: '',
        },
        experiences: [{
            id: '1',
            title: '',
            company: '',
            period: '',
            description: '',
        }],
        education: {
            major: '',
            university: '',
            period: '',
            status: '',
        },
        skills: [''],
        languages: [{
            name: '',
            level: ''
        }]
    });

    const [isPreview, setIsPreview] = useState(false);
    const previewRef = useRef();

    const handlePDF = async () => {
        try {
            const element = previewRef.current;
            if (!element) {
                console.error('Preview element not found');
                return;
            }

            const originalStyle = element.style.cssText;
            element.style.cssText = `
                padding: 25px;
                width: 210mm;
                min-height: 297mm;
                margin: 0 auto;
                background: white;
                font-family: sans-serif;
            `;

            const styleSheet = document.createElement("style");
            styleSheet.textContent = `
                .print-specific h2 {
                    font-size: 18px !important;
                    margin-bottom: 1px !important;
                    padding-bottom: 16px !important;
                    letter-spacing: 0.2em !important;
                }
                .print-specific ul {
                    list-style: disc !important;
                    padding-left: 16px !important;
                    margin-top: 8px !important;
                }
                .print-specific li {
                    font-size: 14px !important;
                    line-height: 1.5 !important;
                    padding-left: 0 !important;
                }
                .print-specific li::marker {
                    font-size: 12px !important;
                    color: #6B7280 !important;
                }
                .print-specific .header-contact {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 8px !important;
                }
                .print-specific .contact-item {
                    display: flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                }
                .print-specific .contact-item svg {
                    width: 16px !important;
                    height: 16px !important;
                    flex-shrink: 0 !important;
                }
            `;
            document.head.appendChild(styleSheet);
            element.classList.add('print-specific');

            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                width: element.offsetWidth,
                height: element.offsetHeight,
            });

            element.style.cssText = originalStyle;
            element.classList.remove('print-specific');
            document.head.removeChild(styleSheet);

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
                compress: true
            });

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const margin = 10;

            const availableWidth = pageWidth - (2 * margin);
            const availableHeight = pageHeight - (2 * margin);

            const imgAspectRatio = canvas.height / canvas.width;
            let finalWidth = availableWidth;
            let finalHeight = finalWidth * imgAspectRatio;

            if (finalHeight > availableHeight) {
                finalHeight = availableHeight;
                finalWidth = finalHeight / imgAspectRatio;
            }

            const x = (pageWidth - finalWidth) / 2;
            const y = margin;

            pdf.addImage(
                imgData,
                'PNG',
                x,
                y,
                finalWidth,
                finalHeight
            );

            pdf.save(`${cvData.personalInfo.fullName || 'cv'}.pdf`);

        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const handleShare = (platform) => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`Check out ${cvData.personalInfo.fullName}'s CV!`);

        const urls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            whatsapp: `https://wa.me/?text=${text} ${url}`,
        };

        window.open(urls[platform], '_blank');
    };

    return (
        <div>
            <div className="mb-6">
                <ActionButtons
                    onTogglePreview={() => setIsPreview(!isPreview)}
                    onPDF={handlePDF}
                    onShare={handleShare}
                    isPreview={isPreview}
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {!isPreview && (
                    <CVForm
                        data={cvData}
                        onChange={setCVData}
                    />
                )}
                <div className={isPreview ? "md:col-span-2" : ""}>
                    <CVPreview
                        ref={previewRef}
                        data={cvData}
                    />
                </div>
            </div>
        </div>
    );
};

export default CVBuilder;