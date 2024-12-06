import { useState, useRef, useEffect } from 'react';
import { Share2, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import PropTypes from 'prop-types';

const ShareDropdown = ({ onShare }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const shareOptions = [
        { id: 'facebook', icon: Facebook, label: 'Facebook' },
        { id: 'twitter', icon: Twitter, label: 'Twitter' },
        { id: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
        { id: 'whatsapp', icon: MessageSquare, label: 'WhatsApp' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all"
            >
                <Share2 size={20} />
                <span className="text-gray-700">Share</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.1)] z-50">
                    {shareOptions.map((option) => (
                        <button
                            key={option.id}
                            className="flex items-center gap-2 w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => {
                                onShare(option.id);
                                setIsOpen(false);
                            }}
                        >
                            <option.icon size={16} />
                            <span className="text-gray-700">{option.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

ShareDropdown.propTypes = {
    onShare: PropTypes.func.isRequired
};

export default ShareDropdown;