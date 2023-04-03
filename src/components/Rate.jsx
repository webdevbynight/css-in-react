import { useState } from "react";

const Rate = () =>
{
    const ratings = [1, 2, 3, 4, 5],
        handleSubmit = (e) =>
        {
            // Prevent the form to behave as expected
            e.preventDefault();

            // Get the data submitted by the form
            const formData = new FormData(e.target);
            for (let [key, value] of formData)
            {
                if (key === 'rate' && value)
                {
                    setRate(value);
                    break;
                }
            }
        };
    let [rate, setRate] = useState(0);
    const template =
    (
        <>
            {
                !rate ?
                (
                    <form action="./" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Please rate</legend>
                            <ul>
                                {
                                    ratings.map(rating =>
                                    {
                                        const fragment =
                                        (
                                            <li key={rating}>
                                                <input type="radio" id={`rate-${rating}-5`} name="rate" value={rating} />
                                                <label htmlFor={`rate-${rating}-5`}>{rating}</label>
                                            </li>
                                        );
                                        return fragment;
                                    })
                                }
                            </ul>
                        </fieldset>
                        <p><input type="submit" /></p>
                    </form>
                )
                :
                (<p>{`You have given the following rate: ${rate} on 5.`}</p>)
            }
        </>
    );
    return template;
}

export default Rate;