
import '../styles/home.styles.scss'
import selfie from '../assets/tpb-image-selfie.png'

const Home = () => {

    return (
        <div className="v1-main-grid">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="section-left">

                    
                    <div className="section-left__first-name">
                        tilak
                    </div>
                    <div></div>
                    <div className="section-left__selfie">
                        <img src={selfie} alt="selfie" />
                    </div>
                    <div className="section-left__last-name">
                        bhatt
                    </div>
                    
                </div>
            </div>
            <div className="section-right">
            </div>
        </div>
    )
}

export default Home