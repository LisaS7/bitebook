import { sendPasswordReset, logout } from "../../../lib/firebase";
import { useDeleteUser } from "react-firebase-hooks/auth";
import { infoStyle } from "../../../console_css";
import { deleteRecord } from "../../../Service";
import Button from "react-bootstrap/Button";

export default function Buttons({ user, auth }) {
  // ignore warning for unused variable
  // eslint-disable-next-line
  const [deleteUser, loadingDelete, errorDelete] = useDeleteUser(auth);

  async function handleDelete() {
    const success = await deleteUser();

    if (success) {
      console.info("%c Deleted user " + user?.uid, infoStyle);
      //   foods.forEach((food) => {
      //     deleteRecord(food.id, "foods");
      //   });
      //   bites.forEach((bite) => {
      //     deleteRecord(bite.id, "bites");
      //   });
      alert("Account deleted");
      logout();
    } else {
      console.error(errorDelete);
    }
  }

  return (
    <section>
      <button data-cy="reset-pwd" onClick={() => sendPasswordReset(user.email)}>
        Reset Password
      </button>
      <button data-cy="logout" onClick={logout}>
        Logout
      </button>
      <Button data-cy="delete-user" variant="danger" onClick={handleDelete}>
        Delete Account
      </Button>
    </section>
  );
}