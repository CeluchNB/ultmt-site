import ImageWithDescription from './image-with-description'

const GUIDE_SECTIONS = {
    TEAM_GUESTS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/team-guests.png',
        description:
            'Add guests from the same page you search for existing players.',
    },
    GAME_GUESTS: {
        url: 'https://storage.googleapis.com/ultmt-site-images/game-play/game-guests.png',
        description:
            'You can also add guests while selecting players during a game in progress. It is not recommended to use this approach',
    },
}

export const Guests = () => {
    return (
        <div>
            <span className="text-gray-300 text-sm mb-2">
                Guests can be created in one of two ways. Either from the
                &ldquo;Team&ldquo; page or during a game. It is HIGHLY
                recommended to create guests from the &ldquo;Team&ldquo; page.
            </span>
            <ImageWithDescription {...GUIDE_SECTIONS.TEAM_GUESTS} />
            <ImageWithDescription {...GUIDE_SECTIONS.GAME_GUESTS} />
        </div>
    )
}
