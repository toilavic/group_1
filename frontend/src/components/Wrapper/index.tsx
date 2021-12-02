import { Box } from "@mui/material"
import { ReactNode } from "react"

interface InterfaceWrapperProps {
    children: ReactNode
}

const Wrapper = ({children} : InterfaceWrapperProps) => {
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {children}
        </Box>
    )
}

export default Wrapper
