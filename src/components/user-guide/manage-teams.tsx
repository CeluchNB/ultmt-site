import ImageWithDescription from './image-with-description'

const GUIDE_SECTIONS = {
    CREATE_TEAM: {
        url: 'https://storage.googleapis.com/ultmt-site-images/create-team.png',
        description:
            "Create a team by clicking the '+' button next to 'Teams' on the Profile screen. You must include a unique team handle; think if this as a username for your team.",
    },
    MANAGE_TEAM: {
        url: 'https://storage.googleapis.com/ultmt-site-images/manage-team-screen.png',
        description:
            'You can view the players and managers of your team on the "Manage Team" page. You can get here by clicking on the team you managed when it has the "Managed" label underneath it.',
    },
    ADD_PLAYERS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/add-players-to-team.png',
        description:
            'You can send requests for players to join your team by searching for them by their names. See "Guests" section for more information about adding guests.',
    },
    JOIN_CODE: {
        url: 'https://storage.googleapis.com/ultmt-site-images/create-join-code.png',
        description:
            'To roster players more easily, you can create a join code. Send this code to your players, they can search for your team and join automatically. This code is valid for 24 hours.',
    },
    MANAGE_REQUESTS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/manage-requests-to-team.png',
        description:
            "Accept or reject requests from players to join your team by clicking the 'Manage Requests' button.",
    },
    OTHER_ACTIONS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/team-actions.png',
        description:
            'Perform other team actions like rolling over, deleting, or archiving a team on the "Settings" page.',
    },
}

export const ManageTeams = () => {
    return (
        <div>
            <span className="text-xl text-ultmtblue mb-1">Creating a Team</span>
            <ImageWithDescription {...GUIDE_SECTIONS.CREATE_TEAM} />
            <span className="text-xl text-ultmtblue mb-1">
                Player Management
            </span>
            <ImageWithDescription {...GUIDE_SECTIONS.MANAGE_TEAM} />
            <ImageWithDescription {...GUIDE_SECTIONS.ADD_PLAYERS} />
            <ImageWithDescription {...GUIDE_SECTIONS.JOIN_CODE} />
            <ImageWithDescription {...GUIDE_SECTIONS.MANAGE_REQUESTS} />
            <span className="text-xl text-ultmtblue mb-1">Other Actions</span>
            <ImageWithDescription {...GUIDE_SECTIONS.OTHER_ACTIONS} />
        </div>
    )
}
