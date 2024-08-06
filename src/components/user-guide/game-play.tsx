import ImageWithDescription from './image-with-description'

const GUIDE_SECTIONS = {
    SELECT_MY_TEAM: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/select-my-team.png',
        description:
            'To create a game select the "+" button on the "Games" screen or the "+" button next to the "Games" header on the Profile screen. You will be taken to a screen to select the team you want to start a game with.',
    },
    SELECT_GUEST_OPPONENT: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/select-guest-opponent.png',
        description:
            'You will then have the option to find your opponent. If your opponent, does not have a team in the app, you can simply type in their name and press "Continue with Guest Team"',
    },
    SELECT_EXISTING_OPPONENT: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/select-existing-team.png',
        description:
            'If the team you are searching for does exist, simply press on the team.',
    },
    GAME_OPTIONS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/create-game-options.png',
        description:
            'You can then specify the options of your game. Notably, you can create an "offline" game. This will allow games to be created without any network service. You can push these games when you have service again.',
    },
}

export const GamePlay = () => {
    return (
        <div>
            <span className="text-xl text-ultmtblue">Create a Game</span>
            <ImageWithDescription {...GUIDE_SECTIONS.SELECT_MY_TEAM} />
            <ImageWithDescription {...GUIDE_SECTIONS.SELECT_GUEST_OPPONENT} />
            <ImageWithDescription
                {...GUIDE_SECTIONS.SELECT_EXISTING_OPPONENT}
            />
            {/* TODO: join existing game */}
            <ImageWithDescription {...GUIDE_SECTIONS.GAME_OPTIONS} />
            <span className="text-xl text-ultmtblue">Tournaments</span>
            <span className="text-xl text-ultmtblue">Live Game Play</span>
            {/* TODO: Re-entering */}
        </div>
    )
}
