export default {
    data: () => ({
        editorOption: {
            theme: "snow",
            modules: {
                toolbar: [
                    [{ font: [] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ size: ["small", false, "large", "huge"] }],
                    [{ align: [] }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ color: [] }, { background: [] }],
                ],
            },
        },
        rules: {
            file_limit: (v) =>
                !v || v.size < 10000000 || "File harus kurang dari 10 MB.",
            num_only: (v) => {
                let p = /^[0-9]+$/g;
                return p.test(v) || "Hanya angka.";
            },
            money_only: (v) => {
                let p = /^[0-9]+$|^[0-9]+(.[0-9]{1,2}$)/g;
                return p.test(v) || "Masukkan jumlah yang valid";
            },
            password_length: (v) =>
                (!!v && v.length >= 8) || "Kata sandi harus minimal 8 karakter",
            username: (v) => (v || "").indexOf(" ") < 0 || "Tidak ada spasi yang diperbolehkan",
            userreg: (v) => {
                let namepatt = /^[a-z0-9_]{2,}[a-z_]+[\d]*$/;
                return (
                    namepatt.test(v) ||
                    "Tidak ada huruf besar. Tidak ada karakter khusus. Hanya Garis Bawah"
                );
            },
            required: (value) => !!value || "Wajib di isi.",
            email: (value) => {
                const pattern =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "Email tidak valid.";
            },
        },
    }),
};