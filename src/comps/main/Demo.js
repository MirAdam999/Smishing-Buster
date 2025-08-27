
import '../../style/Sections.css'
import '../../style/VideoPlayer.css'
import demoVideo from '../../style/images/demo.mp4';
import { useState } from "react";

const Demo = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="demo">
            <div className="content" id='demo'>
                <div className="content-image" id='video'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>

                    <video controls={isHovered}>
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="content-right" id='demo-content'>
                    <h2>App Demo</h2>
                    <ul>
                        <li className='main-li'>Simplistic UI</li>
                        <li className='main-li'>Main Screen:
                            <ul>
                                <li>Turn the service On and Off</li>
                                <li>Settings</li>
                                <li>Reports</li>
                            </ul>
                        </li>
                        <li className='main-li'>Reports Page, for each SMS message:
                            <ul>
                                <li>General Score</li>
                                <li>Sender</li>
                                <li>Content</li>
                            </ul>
                        </li>
                        <li className='main-li'>Detailed Report for SMS:
                            <ul>
                                <li>Date and time of arrival</li>
                                <li>Sender</li>
                                <li>Content</li>
                                <li>General Score</li>
                                <li>Suspicious Elements found</li>
                                <li>Links found</li>
                                <li>Screenshots of Pages to which the links lead</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Demo