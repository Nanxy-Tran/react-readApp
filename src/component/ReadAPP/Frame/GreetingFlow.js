import React, { useState, useEffect } from 'react';
import { Fade, Typography } from '@material-ui/core';

export default function GreetingFlow(props) {
    const [state, setState] = useState(0);
    useEffect(() => {
        if (state < 2) {
            setTimeout(() => setState(1), 3000)        
        }
    },[state, props]);
    return (
        <React.Fragment>
            {state === 0 || 1 ?
                <Fade in={true} timeout={3000}>
                    <Typography align='center'>                
                        <strong> Đọc gì hôm nay ? ® </strong>
                    </Typography>
                </Fade> :
                <div></div>
            }   
            {state === 1 ?
                <Fade in={true} timeout={3000} onEnter={() => props.showButton()}>
                    <Typography align="center">
                       Hy vọng bạn sẽ tìm được một cuốn sách phù hợp ngay lúc này :3
                    </Typography>
                </Fade> :
                <div></div>
            }
        </React.Fragment>
    )
}
