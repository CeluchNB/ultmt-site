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
    FIRST_POINT: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/first-point.png',
        description:
            'After creating a game, you will choose whether you are pulling or receiving to start. You also can see the "Join code" which is how the other team is able to join your game.',
    },
    SELECT_PLAYERS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/select-players.png',
        description:
            'Each point starts with selecting players. You can select the amount of players specified in the "Players per point" option on the "Create Game" screen.',
    },
    PULL_ACTION: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/pull-action.png',
        description:
            'After selecting players, the point begins and you can log actions as they occur.',
    },
    LATER_ACTIONS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/throwing-action.png',
        description:
            'Most actions such as catches, drops, throwaways, scores, etc. contribute to statistics. However, certain actions like timeouts and calls are simply for informational purposes.',
    },
    TAGS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/tags.png',
        description:
            'To add more context to an action you can use tags. Long press on any action (except for substitutions) to add tags.',
    },
    FINISH: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/finish-point.png',
        description:
            'After a score has occurred, you can finish the point or finish the game. This is the only place to finish the game, but if you accidentally press "Finish Point" simply go back and select "Finish Game."',
    },
    SEARCH_TOURNAMENTS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/search-tournaments.png',
        description:
            'Tournaments have very limited functionality; they are only for display purposes currently. However, you can search for tournaments created by you or other users from the "Create Game" screen.',
    },
    CREATE_TOURNAMENTS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/create-tournament.png',
        description:
            "If you can't find the tournament you are looking for by searching, then you can create a tournament. This tournament must include a unique identifier much like a username.",
    },
    REENTER_GAME: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/view-game.png',
        description:
            'You can re-enter a game at any point (even after finishing it) by searching for it and selecting it on the home screen, then pressing the reverse arrow on the game page',
    },
    ACTIVE_GAMES: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/profile-with-active-games.png',
        description:
            'You can also re-enter any game that is live and on your device from the "Profile" screen by viewing your active games.',
    },
    JOIN_GAME: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/join-game.png',
        description:
            'If your opponent also has a team, you can join the same game. One team needs to create the game first, then the other can join the game by selecting the "Join Existing Game," searching for their game, and entering the join code displayed on the "First Point" screen.',
    },
    OFFLINE_GAME_OPTIONS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/offline-game-options.png',
        description:
            'When you finish an offline game, you can access the game by finding the active games on the "Profile" screen. Then you can select the game and either re-enter it or push it so that it is publicly available with statistics.',
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
            <ImageWithDescription {...GUIDE_SECTIONS.JOIN_GAME} />
            <ImageWithDescription {...GUIDE_SECTIONS.GAME_OPTIONS} />
            <span className="text-xl text-ultmtblue">Tournaments</span>
            <ImageWithDescription {...GUIDE_SECTIONS.SEARCH_TOURNAMENTS} />
            <ImageWithDescription {...GUIDE_SECTIONS.CREATE_TOURNAMENTS} />
            <span className="text-xl text-ultmtblue">Live Game Play</span>
            <ImageWithDescription {...GUIDE_SECTIONS.FIRST_POINT} />
            <ImageWithDescription {...GUIDE_SECTIONS.SELECT_PLAYERS} />
            <ImageWithDescription {...GUIDE_SECTIONS.PULL_ACTION} />
            <ImageWithDescription {...GUIDE_SECTIONS.LATER_ACTIONS} />
            <ImageWithDescription {...GUIDE_SECTIONS.TAGS} />
            <ImageWithDescription {...GUIDE_SECTIONS.FINISH} />
            <ImageWithDescription {...GUIDE_SECTIONS.REENTER_GAME} />
            <ImageWithDescription {...GUIDE_SECTIONS.ACTIVE_GAMES} />
            <span className="text-xl text-ultmtblue">Offline Games</span>
            <ImageWithDescription {...GUIDE_SECTIONS.OFFLINE_GAME_OPTIONS} />
        </div>
    )
}
