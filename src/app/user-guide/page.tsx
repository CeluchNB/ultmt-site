'use client'
import Navigation from '@/app/navigation'
import { AccountGuide } from '@/components/user-guide/account-guide'
import { Dropdown } from '@/components/user-guide/dropdown'
import { GamePlay } from '@/components/user-guide/game-play'
import { Guests } from '@/components/user-guide/guests'
import ImageWithDescription from '@/components/user-guide/image-with-description'
import { ManageTeams } from '@/components/user-guide/manage-teams'
import { useEffect, useRef, useState } from 'react'

const OPTIONS = ['User Accounts', 'Manage Teams', 'Game Play', 'Guests']

const GUIDE_SECTIONS = {
    USER_ACCOUNTS: {
        LOGIN_SCREEN: {
            url: 'https://storage.googleapis.com/ultmt-site-images/login-screen.png',
            description:
                "To make your own account, navigate to the 'Account' tab and click 'Create Account'",
        },
        CREATE_ACCOUNT: {
            url: 'https://storage.googleapis.com/ultmt-site-images/create-account.png',
            description:
                'Enter in your details. Ensure you have a unique email and username.',
        },
        PROFILE_SCREEN: {
            url: 'https://storage.googleapis.com/ultmt-site-images/profile-screen.png',
            description:
                'The main profile screen includes your statistics, recent games, and teams.',
        },
        SETTINGS: {
            url: 'https://storage.googleapis.com/ultmt-site-images/settings.png',
            description:
                "Edit settings by clicking 'Settings' in the top right corner of the Profile screen",
        },
        REQUESTS: {
            url: 'https://storage.googleapis.com/ultmt-site-images/manage-requests-from-teams.png',
            description:
                "Respond to roster requests from teams by clicking 'Requests' in the top right corner of the Profile screen. You can request teams by clicking the '+' button next to 'Req",
        },
    },
    TEAM_MANAGEMENT: {
        CREATE_TEAM: {
            url: 'https://storage.googleapis.com/ultmt-site-images/create-team.png',
            description:
                "Create a team by clicking the '+' button next to 'Teams' on the Profile screen. You must include a unique team handle; think if this as a username for your team.",
        },
        MANAGE_TEAMS: {
            url: 'https://storage.googleapis.com/ultmt-site-images/manage-team-screen.png',
            description:
                'You can see team members, add managers, request players to join from the Manage Team screen.',
        },
    },
    GAME_PLAY: {},
    GUESTS: {},
}

export default function UserGuide() {
    const [selected, setSelected] = useState(OPTIONS[0])

    return (
        <div>
            <Navigation />
            <div>
                <div className="flex items-center ml-4">
                    <div>
                        <Dropdown
                            selected={selected}
                            setSelected={setSelected}
                            options={OPTIONS}
                        />
                        {selected === OPTIONS[0] && <AccountGuide />}
                        {selected === OPTIONS[1] && <ManageTeams />}
                        {selected === OPTIONS[2] && <GamePlay />}
                        {selected === OPTIONS[3] && <Guests />}
                    </div>
                </div>
            </div>
        </div>
    )
}
