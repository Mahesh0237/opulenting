import { onValue, ref } from "firebase/database";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

let store = (set) => ({
    usertype: false,
    updateUsertype: (value) => set({ usertype: value }),
    // fetchUserTypeUpdate: (userUid, db) => {
    //     onValue(ref(db, `users/${userUid}/usertypeupdate`), (snapshot) => {
    //         const user_type_update = snapshot.val();
    //         if (user_type_update !== null) {
    //             if (user_type_update.usertype) {
    //                 set({ usertype: true });
    //             }
    //         } else {
    //             set({ usertype: false });
    //         }
    //     })
    // }
})

store = persist(store, {
    name: "userTypeUpdate",
    storage: createJSONStorage(() => localStorage)
})
export const userTypeUpdate = create(store)