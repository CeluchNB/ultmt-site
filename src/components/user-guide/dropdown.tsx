'use client'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { Popover } from '@mui/material'

interface DropdownProps {
    selected: string
    setSelected: (value: string) => void
    options: string[]
}

// TODO: consistent sort
const sortOptions = (selected: string) => {
    return (option1: string, option2: string) => {
        if (option1 === selected) {
            return -1
        } else {
            return 1
        }
    }
}

export const Dropdown = ({ selected, setSelected, options }: DropdownProps) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    return (
        <div className="relative">
            <span
                ref={ref}
                className="text-2xl text-ultmtyellow flex flex-row cursor-pointer text-center"
                onClick={() => setOpen(curr => !curr)}
            >
                {selected}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="self-center ml-1"
                    viewBox="0 0 16 16"
                    transform={open ? 'rotate(180)' : ''}
                >
                    <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                </svg>
            </span>
            <Popover
                open={open}
                onClose={() => setOpen(false)}
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="bg-gray-900 p-2">
                    {options
                        .filter(o => o !== selected)
                        .map((value, index) => {
                            return (
                                <span
                                    key={index}
                                    className="text-2xl text-ultmtyellow cursor-pointer"
                                    onClick={() => {
                                        setOpen(false)
                                        setSelected(value)
                                    }}
                                >
                                    {value}
                                </span>
                            )
                        })}
                </div>
            </Popover>
        </div>
    )
}
