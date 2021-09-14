import mongoose from 'mongoose';
function setupDb() {
    main().catch(err => console.log(err));

    async function main() {
      await mongoose.connect('mongodb+srv://Freak:5t4r3e2w1q@api.hngeh.mongodb.net/API?retryWrites=true&w=majority');
    }
}

export {setupDb};
