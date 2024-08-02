import Navigation from '@/app/navigation'
import ImageWithDescription from '@/components/user-guide/image-with-description'

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
    return (
        <div>
            <Navigation />
            <div>
                <div id="side-navigation"></div>
                <div className="flex items-center text-center">
                    <div>
                        <span className="text-2xl text-ultmtyellow ">
                            User Accounts
                        </span>
                        <span className="text-xl text-ultmtblue">
                            Creating an Account
                        </span>
                        <ImageWithDescription
                            {...GUIDE_SECTIONS.USER_ACCOUNTS.LOGIN_SCREEN}
                        />
                        <ImageWithDescription
                            {...GUIDE_SECTIONS.USER_ACCOUNTS.CREATE_ACCOUNT}
                        />
                        <span className="text-xl text-ultmtblue">
                            Account Actions
                        </span>
                        <ImageWithDescription
                            {...GUIDE_SECTIONS.USER_ACCOUNTS.PROFILE_SCREEN}
                        />
                        <ImageWithDescription
                            {...GUIDE_SECTIONS.USER_ACCOUNTS.SETTINGS}
                        />
                        <ImageWithDescription
                            {...GUIDE_SECTIONS.USER_ACCOUNTS.REQUESTS}
                        />
                    </div>
                    <div>
                        <span className="text-2xl text-ultmtyellow">
                            Managing Teams
                        </span>
                        <ImageWithDescription
                            {...GUIDE_SECTIONS.TEAM_MANAGEMENT.CREATE_TEAM}
                        />
                        <ImageWithDescription
                            {...GUIDE_SECTIONS.TEAM_MANAGEMENT.MANAGE_TEAMS}
                        />
                    </div>
                    {/* <div>
                        <span>Game Play</span>
                    </div>
                    <div>
                        <span>Guests</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
