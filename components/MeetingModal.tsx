'use client'
import { ReactNode } from "react";

interface MettingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText: string;
    image?: string;
    buttonIcon?: string;
}
const MeetingModal = ({isOpen, onClose, title, className, children, handleClick, buttonText, image, buttonIcon} : MettingModalProps) => {
  return (
    <div>MeetingModal</div>
  )
}

export default MeetingModal