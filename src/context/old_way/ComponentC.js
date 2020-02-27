import React from 'react';

import { UserContext, AgeContext }  from '../../App';

export default function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <AgeContext.Consumer>
                                {
                                    age => {
                                        return <p>User: {user} and Age: {age}</p>
                                    }
                                }
                            </AgeContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}