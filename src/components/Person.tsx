import React, { FC } from 'react';

//making the props optional
interface Props {
    name: string | undefined,
    age?: number,
    email?: string,
    // getName: (name:string) => string;

}

export const Person :FC  <Props> = ({name, email, age}) => {


    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{age}</p>
        </div>

    )
}



