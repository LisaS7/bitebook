import { useSelector } from "react-redux";
import { sendPasswordReset, logout } from "../../../lib/firebase";
import { useDeleteUser } from "react-firebase-hooks/auth";
import { infoStyle } from "../../../constants";
import { deleteRecord } from "../../../Service";
import Button from "react-bootstrap/Button";

export default function Buttons({ user, auth }) {
  const { foodRecords } = useSelector((state) => state);

  // ignore warning for unused variable
  // eslint-disable-next-line
  const [deleteUser, loadingDelete, errorDelete] = useDeleteUser(auth);

  async function handleDelete() {
    const success = await deleteUser();

    if (success) {
      console.info("%c Deleted user " + user?.uid, infoStyle);
      foodRecords.forEach((record) => {
        deleteRecord(record.id, "foodlists");
      });
      alert("Account deleted");
      logout();
    } else {
      console.error(errorDelete);
    }
  }

  return (
    <div className="button-section">
      <button data-cy="reset-pwd" onClick={() => sendPasswordReset(user.email)}>
        Reset Password
      </button>
      <button data-cy="logout" onClick={logout}>
        Logout
      </button>
      <Button data-cy="delete-user" variant="danger" onClick={handleDelete}>
        Delete Account
      </Button>
    </div>
  );
}
