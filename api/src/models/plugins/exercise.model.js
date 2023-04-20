const exerciseSchema = mongoose.Schema(
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          optionText: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
            required: true,
          },
        },
      ],
      explanation: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }
  );
  
  const Exercise = mongoose.model('Exercise', exerciseSchema);
  
  module.exports = Exercise;