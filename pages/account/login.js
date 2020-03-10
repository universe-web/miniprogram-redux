import { login } from "../../redux-actions/index";
import { dispath } from "../../mini-redux/index";

Component({
  methods: {
    handleLogin() {
      dispath(login());
    }
  }
});
