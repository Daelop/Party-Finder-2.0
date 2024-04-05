'use client'
//depricated button component
import { Button } from '@mui/material';

export default function PfButton({ text, action }: { text: string, action?: any | undefined}) {
    return <Button className="PfButton" variant="outlined" onClick={action}>{text}</Button>;
}