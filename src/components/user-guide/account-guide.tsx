import ImageWithDescription from './image-with-description'

const GUIDE_SECTIONS = {
    LOGIN_SCREEN: {
        url: 'https://storage.googleapis.com/ultmt-site-images/login-screen.png',
        description:
            'To make your own account, navigate to the "Account" tab and click "Create Account"',
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
            'Edit settings by clicking "Settings" in the top right corner of the Profile screen',
    },
    MANAGE_REQUESTS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/manage-requests-from-teams.png',
        description:
            'Respond to roster requests from teams by clicking "Requests" in the top right corner of the Profile screen. You can request teams by clicking the "+" button next to "Requests"',
    },
    REQUEST_TEAM: {
        url: 'https://storage.googleapis.com/ultmt-site-images/request-join-team.png',
        description:
            'Search for teams to your request, or select "Join by Code" and enter the code shared by the team manager.',
    },
}

export const AccountGuide = () => {
    return (
        <div>
            <span className="text-xl text-ultmtblue mb-1">
                Creating an Account
            </span>
            <ImageWithDescription {...GUIDE_SECTIONS.LOGIN_SCREEN} />
            <ImageWithDescription {...GUIDE_SECTIONS.CREATE_ACCOUNT} />
            <span className="text-xl text-ultmtblue mb-1">Account Actions</span>
            <ImageWithDescription {...GUIDE_SECTIONS.PROFILE_SCREEN} />
            <ImageWithDescription {...GUIDE_SECTIONS.SETTINGS} />
            <span className="text-xl text-ultmtblue mb-1">Teams</span>
            <ImageWithDescription {...GUIDE_SECTIONS.MANAGE_REQUESTS} />
            <ImageWithDescription {...GUIDE_SECTIONS.REQUEST_TEAM} />
        </div>
    )
}
