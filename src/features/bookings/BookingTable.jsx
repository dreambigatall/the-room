// import BookingRow from "./BookingRow";
// import Table from "../../ui/Table";
// import Menus from "../../ui/Menus";
// import Empty from '../../ui/Empty'
// import { useBookings } from "./useBookingsFetche";
// import Pagination from "../../ui/Pagination";
// function BookingTable() {
//   //const bookings = [];
//   const {bookings , isLoading, error, count} = useBookings()
//   console.log(bookings)
//   if(!bookings) return <Empty resource='bookings'/>
//   return (
//     <Menus>
//       <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
//         <Table.Header>
//           <div>Cabin</div>
//           <div>Guest</div>
//           <div>Dates</div>
//           <div>Status</div>
//           <div>Amount</div>
//           <div></div>
//         </Table.Header>

//          <Table.Body
//           data={bookings}
//           render={(booking) => (
//             <BookingRow key={booking.id} booking={booking} />
//           )}
//         /> 
//         <Table.Footer>
//           <Pagination count={count}/>
//         </Table.Footer>
//       </Table>
//     </Menus>
//   );
// }

// export default BookingTable;
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookingsFetche";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings = [], isLoading, error, count } = useBookings();
  console.log(bookings);

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Error loading bookings: {error.message}</p>;
  if (!bookings.length) return <Empty resource="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
