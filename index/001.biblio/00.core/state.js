"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_compat_1 = require("rxjs-compat");
const dispatcher_1 = require("./utility/dispatcher");
const BEE_1 = require("../BEE");
const Effect = require("../BEE");
class State extends rxjs_compat_1.BehaviorSubject {
    constructor(init = new BEE_1.default()) {
        super(init);
        this.dispatcher = new dispatcher_1.Dispatcher();
        this.log = [];
        this.save = () => {
            var stage = this.value.stage;
            this.value.stage = null;
            var past = JSON.stringify(this.value);
            this.log.push(past);
            this.value.stage = stage;
            return past;
            console.log("size log " + this.log.length);
        };
        this.undo = () => {
            //this.log.pop();
            var item = this.log.pop();
            console.log("size log " + this.log.length);
            if (item == null)
                return;
            return JSON.parse(item);
        };
        this.dispatcher
            //.let(this.preMiddleware)
            .scan((state, action) => this.reducedApp(state, action), init)
            //.let(this.postMiddleware)
            .subscribe((state) => {
            //push the model some where
            super.next(state);
        });
        //var item = this.select("color");
        //this.combineEffect(this.dispatcher, item).subscribe(this.dispatcher);
    }
    hark(key) {
        var list = key.split(".");
        var sig = "";
        list.forEach((a) => (sig += "['" + a + "']"));
        var partA = "this.map(state => state";
        var partC = ").distinctUntilChanged();";
        var end = partA + sig + partC;
        //console.log("you want to select " + end);
        return eval(end);
    }
    reducedApp(nextState, key) {
        for (var k in Effect.reducer)
            Effect.reducer[k](nextState[k], key, this);
        //StateReducer.reducer(nextState, key);
        //this.combineSpin(nextState, key);
        return nextState;
    }
    dispatch(value) {
        this.dispatcher.dispatch(value);
    }
    pat(value) {
        this.dispatch(value);
    }
    next(value) {
        this.dispatcher.dispatch(value);
    }
}
exports.default = State;
//# sourceMappingURL=state.js.map