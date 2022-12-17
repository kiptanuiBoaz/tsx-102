import React, { FC, useState, ChangeEvent } from 'react';

export enum HairColor{
    Blonde= "Your hair is blode, good for you!",
    Brown = "Cool hair color",
    Pink = "pink ! nice one"
}

//making the props optional
interface Props {
    age?: number,
    name: string | undefined,
    email?: string,
    hairColor: HairColor
}

export const Person: FC<Props> = ({ name, email, age , hairColor}) => {

    const [country, setCountry] = useState<string | null>("");


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)

    }
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{age}</p>
            <input placeholder='Write down your counrty' onChange={handleChange} />
            <p>{country}</p>
            {hairColor}
        </div>

    )
}



