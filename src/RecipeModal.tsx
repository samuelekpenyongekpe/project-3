import React, { useState, useEffect } from 'react';
import { Recipe } from '../data/recipes';
import {
  X,
  Users,
  Clock,
  Flame,
  Plus,
  Minus,
  Check,
  Play,
  Pause,
  RotateCcw,
  Printer,
  Share2,
  Heart,
  Timer as TimerIcon,
  Sparkles,
  Info
} from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (recipeId: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  if (!recipe) return null;

  // Servings multiplier state
  const [servings, setServings] = useState(recipe.servings);

  // Checked ingredients & instructions
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  // Built-in Kitchen Timer
  const initialTimerMinutes = recipe.cookTime > 0 ? recipe.cookTime : recipe.prepTime;
  const [timerSecondsLeft, setTimerSecondsLeft] = useState(initialTimerMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            playTimerSound();
            showToast("Timer finished! Your dish is ready!");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSecondsLeft]);

  // Web Audio synthesizer chime
  const playTimerSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch {
      // AudioContext fallback
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Recipe link copied to clipboard!");
    } else {
      showToast("Ready to share with friends!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scaleAmount = (baseAmount: number): string => {
    const scaled = (baseAmount * servings) / recipe.servings;
    if (scaled === Math.round(scaled)) return `${scaled}`;
    // Common fractions
    const rounded = Math.round(scaled * 100) / 100;
    if (Math.abs(rounded - 0.25) < 0.05) return '¼';
    if (Math.abs(rounded - 0.33) < 0.05) return '⅓';
    if (Math.abs(rounded - 0.5) < 0.05) return '½';
    if (Math.abs(rounded - 0.67) < 0.05) return '⅔';
    if (Math.abs(rounded - 0.75) < 0.05) return '¾';
    return `${rounded}`;
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-recipe-title"
    >
      <div className="modal-dialog">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close recipe details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Cover Image */}
        <div className="modal-hero-cover">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="modal-hero-img"
          />
        </div>

        {/* Modal Main Body */}
        <div className="modal-body">
          {/* Header Metadata */}
          <div className="modal-header-meta">
            <div className="modal-tags-list">
              {recipe.dietary.map((tag) => (
                <span key={tag} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-start justify-between gap-4">
              <h2 id="modal-recipe-title" className="modal-title">
                {recipe.title}
              </h2>
              <button
                onClick={() => onToggleSave(recipe.id)}
                className={`p-2 rounded-full border transition-colors ${
                  isSaved
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-emerald-800'
                }`}
                title={isSaved ? 'Remove from saved' : 'Save recipe'}
              >
                <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            <p className="modal-description">{recipe.description}</p>
          </div>

          {/* Key Metrics Strip */}
          <div className="metrics-strip">
            <div className="metric-pill">
              <div className="metric-pill-label">Prep Time</div>
              <div className="metric-pill-value">{recipe.prepTime} min</div>
            </div>
            <div className="metric-pill">
              <div className="metric-pill-label">Cook Time</div>
              <div className="metric-pill-value">{recipe.cookTime} min</div>
            </div>
            <div className="metric-pill">
              <div className="metric-pill-label">Calories</div>
              <div className="metric-pill-value">{recipe.calories} kcal</div>
            </div>
            <div className="metric-pill">
              <div className="metric-pill-label">Protein</div>
              <div className="metric-pill-value">{recipe.protein}</div>
            </div>
          </div>

          {/* Dynamic Servings Scaler */}
          <div className="servings-scaler-box">
            <div className="scaler-info">
              <Users className="w-5 h-5 text-emerald-800" />
              <span>Adjust recipe yield:</span>
            </div>
            <div className="scaler-controls">
              <button
                onClick={() => setServings((prev) => Math.max(1, prev - 1))}
                disabled={servings <= 1}
                className="btn-scale-step"
                aria-label="Decrease servings"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="scaler-count">
                {servings} {servings === 1 ? 'serving' : 'servings'}
              </span>
              <button
                onClick={() => setServings((prev) => Math.min(12, prev + 1))}
                disabled={servings >= 12}
                className="btn-scale-step"
                aria-label="Increase servings"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Cooking Timer */}
          <div className="timer-widget">
            <div className="timer-left">
              <div className="timer-icon-glow">
                <TimerIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-emerald-200 font-semibold">
                  Kitchen Timer
                </div>
                <div className="timer-display">{formatTimer(timerSecondsLeft)}</div>
              </div>
            </div>
            <div className="timer-actions">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="btn-timer-action flex items-center gap-1.5"
              >
                {isTimerRunning ? (
                  <>
                    <Pause className="w-4 h-4 fill-emerald-800" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-emerald-800" />
                    <span>Start</span>
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSecondsLeft(initialTimerMinutes * 60);
                }}
                className="btn-timer-reset flex items-center gap-1"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Two-Column Ingredients & Instructions */}
          <div className="modal-columns">
            {/* Left: Ingredients Checklist */}
            <div>
              <h3 className="section-subhead">
                <UtensilIcon className="w-5 h-5 text-emerald-800" />
                <span>Ingredients</span>
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Tap items to mark off as you measure:
              </p>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`ingredient-item ${isChecked ? 'checked' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleIngredient(idx)}
                        className="ingredient-checkbox"
                        aria-label={`Check ${ing.item}`}
                      />
                      <span>
                        <strong>{scaleAmount(ing.amount)} {ing.unit}</strong>{' '}
                        {ing.item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Step-by-Step Instructions */}
            <div>
              <h3 className="section-subhead">
                <Sparkles className="w-5 h-5 text-emerald-800" />
                <span>Instructions</span>
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Click a step to highlight your active progress:
              </p>
              <ol className="instructions-list">
                {recipe.instructions.map((step, idx) => {
                  const isCompleted = !!completedSteps[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleStep(idx)}
                      className={`instruction-step ${isCompleted ? 'completed' : ''}`}
                    >
                      <span className="step-number">
                        {isCompleted ? <Check className="w-3 h-3 text-white" /> : idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Chef's Tip Box */}
          {recipe.chefTip && (
            <div className="chef-tip-box">
              <div className="chef-tip-label">Chef’s Secret Tip</div>
              <div className="chef-tip-text">{recipe.chefTip}</div>
            </div>
          )}

          {/* Nutrition Summary Breakdown */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Macro Nutritional Breakdown (Per Serving)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div>
                <span className="text-slate-500">Protein:</span>{' '}
                <strong className="text-emerald-900">{recipe.protein}</strong>
              </div>
              <div>
                <span className="text-slate-500">Net Carbs:</span>{' '}
                <strong className="text-emerald-900">{recipe.carbs}</strong>
              </div>
              <div>
                <span className="text-slate-500">Dietary Fat:</span>{' '}
                <strong className="text-emerald-900">{recipe.fat}</strong>
              </div>
              <div>
                <span className="text-slate-500">Dietary Fiber:</span>{' '}
                <strong className="text-emerald-900">{recipe.fiber}</strong>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="modal-footer-actions">
            <div className="flex items-center gap-2">
              <button onClick={handlePrint} className="btn-modal-action">
                <Printer className="w-4 h-4" />
                <span>Print Recipe</span>
              </button>
              <button onClick={handleShare} className="btn-modal-action">
                <Share2 className="w-4 h-4" />
                <span>Share Recipe</span>
              </button>
            </div>
            <button
              onClick={onClose}
              className="btn-header-cta"
            >
              Done Cooking
            </button>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 text-white px-4 py-2.5 rounded-lg shadow-xl text-sm font-medium animate-bounce flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{toastMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Simple utensil icon helper
function UtensilIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
      <path d="M15 2v10" />
      <path d="M15 12v10" />
      <path d="M6 2v20" />
      <path d="M4 2v6a2 2 0 0 0 4 0V2" />
    </svg>
  );
}
