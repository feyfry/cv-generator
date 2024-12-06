import { Eye, Download, Edit } from 'lucide-react';
import PropTypes from 'prop-types';
import ShareDropdown from './ShareDropdown';

const ActionButtons = ({ onTogglePreview, onPDF, onShare, isPreview }) => {
    return (
        <div className="flex justify-center gap-2 my-4">
            <button
                onClick={onTogglePreview}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all"
            >
                {isPreview ? (
                    <>
                        <Edit size={20} />
                        <span className="text-gray-700">Edit</span>
                    </>
                ) : (
                    <>
                        <Eye size={20} />
                        <span className="text-gray-700">Preview</span>
                    </>
                )}
            </button>

            {isPreview && (
                <>
                    <button
                        onClick={onPDF}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all"
                    >
                        <Download size={20} />
                        <span className="text-gray-700">Download</span>
                    </button>
                    <ShareDropdown onShare={onShare} />
                </>
            )}
        </div>
    );
};

ActionButtons.propTypes = {
    onTogglePreview: PropTypes.func.isRequired,
    onPDF: PropTypes.func.isRequired,
    onShare: PropTypes.func.isRequired,
    isPreview: PropTypes.bool.isRequired
};

export default ActionButtons;