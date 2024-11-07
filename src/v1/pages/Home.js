
import '../styles/home.styles.scss'
import selfie from '../assets/tpb-image-selfie.png'

const Home = () => {

    return (
        <div className='v1-home'>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <div className="section-left">
                <div className="section-left__first-name">
                    tilak
                </div>
                <div></div>
                <div className="section-left__selfie">
                    <img src={selfie} alt="selfie" />
                </div>
                <div className="section-left__last-name">
                    <div className="section-left__last-name__label">
                        bhatt
                    </div>
                    <p>
                        Hello! <br />
                        I am a software engineer based in Nepal. 
                        <br />
                        <br />
                        I am passionate about <br />
                        <div style={{marginLeft:'7px', color:'purple'}}>
                            computer programs, <br />
                            minimal designs, <br />
                            pencil drawings. <br />
                        </div>
                    </p>
                </div>
                
            </div>
            </div>
            <div className='section-right'>
                <div>
                    <p>ABOUT</p>
                </div>
                <div>
                    <p>CONTACT</p>
                </div>
                <div>
                    <p>PENCIL</p>
                </div>
                <div>
                    <p>
                        <a href='https://programmingphile.com' target='_blank' rel="noreferrer">PROGRAMMINGPHILE</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home