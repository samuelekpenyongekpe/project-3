import React, { useState } from 'react';
import { Recipe } from '../data/recipes';
import { Users, Clock, Flame, Heart } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
  isSaved: boolean;
  onToggleSave: (recipeId: string) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelect,
  isSaved,
  onToggleSave,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="recipe-card" id={`recipe-${recipe.id}`}>
      {/* Recipe Image with overlay badge and bookmark button */}
      <div className="recipe-image-frame">
        {!imgError ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-4 text-center"
            style={{ background: recipe.fallbackGradient }}
          >
            <span className="text-3xl mb-1">🥗</span>
            <span className="font-bold text-xs text-emerald-950">
              {recipe.title}
            </span>
          </div>
        )}

        {/* Favorite Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(recipe.id);
          }}
          className={`recipe-bookmark-btn ${isSaved ? 'saved' : ''}`}
          aria-label={isSaved ? `Remove ${recipe.title} from saved` : `Save ${recipe.title}`}
          title={isSaved ? 'Saved to favorites' : 'Save to favorites'}
        >
          <Heart
            className={`w-4 h-4 ${
              isSaved ? 'fill-red-500 text-red-500' : 'text-emerald-950'
            }`}
          />
        </button>

        {/* First Dietary Badge */}
        {recipe.dietary && recipe.dietary.length > 0 && (
          <span className="recipe-tag-badge">
            {recipe.dietary[0]}
          </span>
        )}
      </div>

      {/* Card Content Body */}
      <div className="recipe-card-content">
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <p className="recipe-card-desc">{recipe.description}</p>

        {/* Metadata Row matching the design exactly */}
        <div className="recipe-meta-row">
          <div className="recipe-meta-item" title="Servings">
            <Users className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              Servings: <strong>{recipe.servings}</strong>
            </span>
          </div>

          <span className="text-slate-300">·</span>

          <div className="recipe-meta-item" title="Preparation Time">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              Prep: <strong>{recipe.prepTime} mins</strong>
            </span>
          </div>

          <span className="text-slate-300">·</span>

          <div className="recipe-meta-item" title="Cooking Time">
            <Flame className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              Cook: <strong>{recipe.cookTime === 0 ? '0 min' : `${recipe.cookTime} mins`}</strong>
            </span>
          </div>
        </div>

        {/* View Recipe Action */}
        <button
          onClick={() => onSelect(recipe)}
          className="btn-view-recipe"
          aria-label={`View full recipe for ${recipe.title}`}
        >
          View Recipe
        </button>
      </div>
    </article>
  );
};
