import React, { useState } from 'react';
import './ValuesHorizontalLine.scss'

export default function ValuesHorizontalLine() {
    const [values, setValues] = useState(["Honnêteté", "Respect", "Transparence", "Humain"])
    return (
        <div>
            <ul className="values-container">
                {
                    values.map(value => (
                        <li>
                            <div class="block" source="value">
                                <figure>
                                    <figcaption>{value}</figcaption>
                                </figure>
                            </div>
                        </li>
                    ))
                }              
            </ul>
        </div>
    )
}