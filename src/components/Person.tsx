import React, { FC, useState, ChangeEvent } from 'react';

//making the props optional
interface Props {
    name: string | undefined,
    age?: number,
    email?: string,
    // getName: (name:string) => string;

}

export const Person: FC<Props> = ({ name, email, age }) => {

    const [country, setCountry] = useState<string | null>("");

    enum HairColor{
        Blonde= "Your hair is blode, good for you!",
        Brown = "Cool hair color",
        Pink = "pink ! nice one"
    }

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
            {HairColor.Blonde}
        </div>

    )
}



