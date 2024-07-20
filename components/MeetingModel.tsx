import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'


interface MeetingModelProps {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    className?: string,
    buttonText?: string,
    handleClick: () => void,
    children?: React.ReactNode,
    image?: string, 
    buttonIcon?: string
}

const MeetingModel = ({ isOpen, onClose, title, className, buttonText, handleClick, children, image, buttonIcon }: MeetingModelProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='flex flex-col gap-6 text-white w-full max-w-[560px] border-none bg-dark-1 px-6 py-9'>
               <div className="flex flex-col gap-6">
                {image && <Image src={image} alt="image" width={72} height={72}/>}
               </div>
               <h1 className={cn('text-3xl font-bold',className)}>{title}</h1>
               {children}
                <Button onClick={handleClick} className="bg-blue-1 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 *
                focus-visible:ring-0 focus-visible:ring-offset-0">
                     {buttonIcon && <Image src={buttonIcon} alt="icon" width={24} height={24}/>}
                     {buttonText}
                </Button>
            </DialogContent>
        </Dialog>

    )
}

export default MeetingModel