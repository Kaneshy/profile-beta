'use server'
import { connectToDB } from "@/lib/mongoose.js";
import BadgeGroup from "../../lib/models/badg";


const exampleGroupData = {
    name: 'group 1',
    badgets: [
        {
            name: 'lotus',
            desc: 'lotus from mvb',
            level: 3,
            img: 'htt.',
        },
        {
            name: 'lotus',
            desc: 'lotus from mvb',
            level: 3,
            img: 'htt.',
        },
    ],
};
export const addBadgeGroup = async () => {
    try {
        // Ensure the DB connection is established (assuming connectToDB is async)
        await connectToDB();
        
        // Create a new instance of the BadgeGroup model with the passed data
        const newBadgeGroup = new BadgeGroup(exampleGroupData);
        
        // Save to MongoDB
        const savedBadgeGroup = await newBadgeGroup.save();
        
        console.log('Badge Group Saved:', savedBadgeGroup);
        return true;
    } catch (error) {
        console.error('Error saving badge group:', error);
        throw error;
    }
};

// Example usage:




