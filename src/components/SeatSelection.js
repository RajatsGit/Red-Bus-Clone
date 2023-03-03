import React, { useContext, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import JourneyContext from '../context/JourneyContext';
import './seat.css'
const SeatSelection = () => {
    const [selectedSeat,setSelectedSeat] = React.useState([]);
    const { from ,to } = useContext(JourneyContext);
    const navigate = useNavigate();
    useEffect(() => {
    if(!from || !to){
      navigate("/");
    }
    
     
    }, [from,to,navigate])
    

    function seatNum(i,j){
        return 8*i+j+1;
    }
    return (
        <Container className='bg-danger m-0 mw-100 p-4'>
            <div className='seats bg-white p-2 d-flex justify-content-center flex-column align-items-center'>
            {[1, 2, 3].map((seatRow, i) => {
                return (<div className={`row mt-${Math.ceil(seatRow * 1.5)}`} key={seatRow}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => {
                        return (<div className={`seat ${selectedSeat.includes(seatNum(i,j)) ? "bg-success":"" }`} key={seatNum(i,j)}
                        onClick={()=>{
                            const preSeats = [...selectedSeat];
                            if(selectedSeat.includes(seatNum(i,j))){
                                const allseatsExceptCurrent = preSeats.filter((currentSeat)=>{
                                    return currentSeat !== seatNum(i,j);
                                })
                                setSelectedSeat(allseatsExceptCurrent);
                            }else{
                                setSelectedSeat([...preSeats,seatNum(i,j)]);
                            }
                            
                        }}
                        >{seatNum(i,j)}</div>
            )})}
                </div>)
            })}

            {/* <div className='row d-flex'>
        {[1,2,3,4,5,6,7,8].map((idx)=>{
            return <div key = {idx} className='seat'></div>
        })}
        </div>
        <div className='row mt-2'>
        {[1,2,3,4,5,6,7,8].map((idx)=>{
            return <div key = {idx} className='seat'></div>
        })}
        </div>
        <div className='row mt-5'>
        {[1,2,3,4,5,6,7,8].map((idx)=>{
            return <div key = {idx} className='seat'></div>
        })}
        </div> */}
        {selectedSeat.length? <Button variant="success rounded-0 mt-4">
            Book Tickets
        </Button>: null}
        </div>
        </Container>
    )
}

export default SeatSelection