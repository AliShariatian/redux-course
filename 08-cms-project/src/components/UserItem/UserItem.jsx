import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/store/users";
import swal from "sweetalert";

export default function UserItem({ _id, firstname, lastname, email }) {
   const dispatch = useDispatch();

   const removeUserHandler = () => {
      swal({
         title: `آیا از حذف کاربر ${lastname} ${firstname} مطمئن هستید؟`,
         icon: "warning",
         buttons: ["حذف کاربر", "انصراف"],
      }).then((result) => {
         // if click on delete
         if (!result) {
            dispatch(removeUser(_id));

            swal({
               title: `${lastname} ${firstname} با موفقیت حذف شد!`,
               icon: "success",
               buttons: "باشه",
            });
         }
      });
   };

   return (
      <div className="uesrs__item">
         <div className="users__info">
            <img src="../../img/admin/profile/banana.png" alt="photo user" className="users__img" />
            <div className="users__details">
               <p className="users__name my-0">{`${lastname} ${firstname}`}</p>
               <p lang="en" className="users__email">
                  {email}
               </p>
            </div>
         </div>
         <div className="users__btns">
            <button className="btn-custome btn-custome--gray">پیام ها</button>
            <button className="btn-custome btn-custome__blue">اطلاعات</button>
            <button onClick={removeUserHandler} className="btn-custome btn-custome__red">
               حذف
            </button>
         </div>
      </div>
   );
}

