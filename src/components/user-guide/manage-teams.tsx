import ImageWithDescription from './image-with-description'

const GUIDE_SECTIONS = {
    CREATE_TEAM: {
        url: 'https://storage.googleapis.com/ultmt-site-images/create-team.png',
        description:
            "Create a team by clicking the '+' button next to 'Teams' on the Profile screen. You must include a unique team handle; think if this as a username for your team.",
    },
    MANAGE_TEAMS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/manage-team-screen.png',
        description:
            'You can view the players and managers of your team on the "Manage Team" page. You can get here by clicking on the team you managed when it has the "Managed" label underneath it.',
    },
    ADD_PLAYERS: {},
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
            <span className="text-xl text-ultmtblue">Creating a Team</span>
            <ImageWithDescription {...GUIDE_SECTIONS.CREATE_TEAM} />
            <span className="text-xl text-ultmtblue">Player Management</span>
            <ImageWithDescription {...GUIDE_SECTIONS.MANAGE_TEAMS} />
            <ImageWithDescription {...GUIDE_SECTIONS.MANAGE_REQUESTS} />
            <span className="text-xl text-ultmtblue">Other Actions</span>
            <ImageWithDescription {...GUIDE_SECTIONS.OTHER_ACTIONS} />
        </div>
    )
}
