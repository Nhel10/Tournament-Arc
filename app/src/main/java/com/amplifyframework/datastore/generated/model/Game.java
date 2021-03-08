package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.HasMany;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.AuthStrategy;
import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.ModelOperation;
import com.amplifyframework.core.model.annotations.AuthRule;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the Game type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Games", authRules = {
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
})
public final class Game implements Model {
  public static final QueryField ID = field("Game", "id");
  public static final QueryField GAME_TITLE = field("Game", "gameTitle");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String gameTitle;
  private final @ModelField(targetType="GameOnPlatform") @HasMany(associatedWith = "gameID", type = GameOnPlatform.class) List<GameOnPlatform> GameToGOP = null;
  public String getId() {
      return id;
  }
  
  public String getGameTitle() {
      return gameTitle;
  }
  
  public List<GameOnPlatform> getGameToGop() {
      return GameToGOP;
  }
  
  private Game(String id, String gameTitle) {
    this.id = id;
    this.gameTitle = gameTitle;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      Game game = (Game) obj;
      return ObjectsCompat.equals(getId(), game.getId()) &&
              ObjectsCompat.equals(getGameTitle(), game.getGameTitle());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getGameTitle())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("Game {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("gameTitle=" + String.valueOf(getGameTitle()))
      .append("}")
      .toString();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  /** 
   * WARNING: This method should not be used to build an instance of this object for a CREATE mutation.
   * This is a convenience method to return an instance of the object with only its ID populated
   * to be used in the context of a parameter in a delete mutation or referencing a foreign key
   * in a relationship.
   * @param id the id of the existing item this instance will represent
   * @return an instance of this model with only ID populated
   * @throws IllegalArgumentException Checks that ID is in the proper format
   */
  public static Game justId(String id) {
    try {
      UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
    } catch (Exception exception) {
      throw new IllegalArgumentException(
              "Model IDs must be unique in the format of UUID. This method is for creating instances " +
              "of an existing object with only its ID field for sending as a mutation parameter. When " +
              "creating a new object, use the standard builder method and leave the ID field blank."
      );
    }
    return new Game(
      id,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      gameTitle);
  }
  public interface BuildStep {
    Game build();
    BuildStep id(String id) throws IllegalArgumentException;
    BuildStep gameTitle(String gameTitle);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String gameTitle;
    @Override
     public Game build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Game(
          id,
          gameTitle);
    }
    
    @Override
     public BuildStep gameTitle(String gameTitle) {
        this.gameTitle = gameTitle;
        return this;
    }
    
    /** 
     * WARNING: Do not set ID when creating a new object. Leave this blank and one will be auto generated for you.
     * This should only be set when referring to an already existing object.
     * @param id id
     * @return Current Builder instance, for fluent method chaining
     * @throws IllegalArgumentException Checks that ID is in the proper format
     */
    public BuildStep id(String id) throws IllegalArgumentException {
        this.id = id;
        
        try {
            UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
        } catch (Exception exception) {
          throw new IllegalArgumentException("Model IDs must be unique in the format of UUID.",
                    exception);
        }
        
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String id, String gameTitle) {
      super.id(id);
      super.gameTitle(gameTitle);
    }
    
    @Override
     public CopyOfBuilder gameTitle(String gameTitle) {
      return (CopyOfBuilder) super.gameTitle(gameTitle);
    }
  }
  
}
