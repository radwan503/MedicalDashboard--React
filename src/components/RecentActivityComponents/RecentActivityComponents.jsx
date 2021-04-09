import React from 'react';
import './RecentActivityComponents.scss';

const RecentActivityComponents = () => {
    return (
        <>
            <div className="activity-feed">
                <div className="feed-item">
                    <div className="date">Sep 25</div>
                    <div className="text">Responded to need <a href="#">“Volunteer opportunity”</a></div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 24</div>
                    <div className="text">Added an interest “Volunteer Activities”</div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 23</div>
                    <div className="text">Joined the group <a href="#">“Boardsmanship Forum”</a></div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 21</div>
                    <div className="text">Responded to need <a href="#">“In-Kind Opportunity”</a></div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 18</div>
                    <div className="text">Created need <a href="#">“Volunteer Opportunity”</a></div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 17</div>
                    <div className="text">Attending the event <a href="#">“Some New Event”</a></div>
                </div>
            </div>
            
        </>
    )
}

export default RecentActivityComponents
