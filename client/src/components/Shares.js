import React, { Component } from "react";
import { useForm } from "react-hook-form";
import sharesHelper from "../helper/sharesHelper";

class Shares extends Component {
  render() {
    const { register, handleSubmit } = useForm();
    const { shareClick } = this.props;
    //   // function buttonClick(e) {
    //   //   e.preventDefault();
    //   //   console.log("clicked");
    //   // }

    function onSubmit(data, e) {
      e.preventDefault();
      console.log(data);
      sharesHelper(data);
    }

    return (
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button type="button" onClick={shareClick}>
            {" "}
          </button>
        </form>
      </main>
    );
  }
}
// <main>
//   <form onSubmit={handleSubmit(onSubmit)}>
//         <button type="hidden" name="twitter" onClick={register}>
//           Twitter
//         </button>
//         <button
//           type="hidden"
//           name="facebook"
//           // ref={register({ required: true })}
//           // onClick={buttonClick}
//           onClick={register}
//         >
//           Facebook
//         </button>
//         <button
//           type="hidden"
//           name="email"
//           // ref={register({ required: true })}
//           // onClick={buttonClick}
//           onClick={register}
//         >
//           E-mail
//         </button>
//         <button
//           type="hidden"
//           name="whatsapp"
//           // ref={register({ required: true })}
//           // onClick={buttonClick}
//           onClick={register}
//         >
//           WhatsApp
//         </button>

//         <button type="submit">Submit</button>
//       </form>
//     </main>
//   );
// }

// export default Shares;

/* <button type="hidden" name="twitter" onClick={buttonClick}>
        Twitter
      </button>
      <button type="hidden" name="facebook" onClick={buttonClick}>
        Facebook
      </button>
      <button type="hidden" name="email" onClick={buttonClick}>
        E-mail
      </button>
      <button type="hidden" name="whatsapp" onClick={buttonClick}>
        WhatsApp
      </button> */

//     <main>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="twitter">Twitter</label>
//         <input
//           ref={register({ required: true })}
//           type="button"
//           name="twitter"
//         />

//         <label htmlFor="facebook">Facebook</label>
//         <input
//           ref={register({ required: true })}
//           type="button"
//           name="facebook"
//         />

//         <label htmlFor="email">E-mail</label>
//         <input ref={register({ required: true })} type="button" name="email" />

//         <label htmlFor="whatsapp">Whatsapp</label>
//         <input
//           ref={register({ required: true })}
//           type="button"
//           name="whatsapp"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </main>
//   );
// }
export default Shares;
