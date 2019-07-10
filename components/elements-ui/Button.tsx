import * as React from 'react'

type Props = {
  label: String
}

export const Button: React.FunctionComponent<Props> = ({ label }) => (
    <div>
        { label }
    </div>
)
