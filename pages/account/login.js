import { login } from "./../../mini-redux-js/actions/index";
import { dispath } from "./../../mini-redux/index";

Component({
  methods: {
    handleLogin() {
      dispath(login());
    }
  }
});
