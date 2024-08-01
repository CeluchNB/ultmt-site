import Navigation from '@/app/navigation'
import ImageWithDescription from '@/components/user-guide/image-with-description'

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
                            url="https://storage.googleapis.com/ultmt-site-images/create-account.png"
                            description="To make your own account, navigate to the 'Account' tab and click 'Create Account'"
                        />
                    </div>
                    <div>
                        <span>Managing Teams</span>
                    </div>
                    <div>
                        <span>Game Play</span>
                    </div>
                    <div>
                        <span>Guests</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
