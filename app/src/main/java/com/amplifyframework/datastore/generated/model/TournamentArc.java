package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;
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

/** This is an auto generated class representing the TournamentArc type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "TournamentArcs", authRules = {
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
})
@Index(name = "byTournamentEvent", fields = {"tournamenteventID"})
public final class TournamentArc implements Model {
  public static final QueryField ID = field("TournamentArc", "id");
  public static final QueryField TOURNAMENTEVENT_ID = field("TournamentArc", "tournamenteventID");
  public static final QueryField ARC_NAME = field("TournamentArc", "arcName");
  public static final QueryField DESCRIPTION = field("TournamentArc", "description");
  public static final QueryField ORGANIZING_BODY = field("TournamentArc", "organizingBody");
  public static final QueryField START_DATE = field("TournamentArc", "startDate");
  public static final QueryField END_DATE = field("TournamentArc", "endDate");
  public static final QueryField TOTAL_PRIZE_MONEY = field("TournamentArc", "totalPrizeMoney");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="ID") String tournamenteventID;
  private final @ModelField(targetType="String") String arcName;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="String") String organizingBody;
  private final @ModelField(targetType="AWSDateTime") Temporal.DateTime startDate;
  private final @ModelField(targetType="AWSDateTime") Temporal.DateTime endDate;
  private final @ModelField(targetType="Float") Double totalPrizeMoney;
  private final @ModelField(targetType="TournamentBracket") @HasMany(associatedWith = "tournamentarcID", type = TournamentBracket.class) List<TournamentBracket> ArcToBrackets = null;
  public String getId() {
      return id;
  }
  
  public String getTournamenteventId() {
      return tournamenteventID;
  }
  
  public String getArcName() {
      return arcName;
  }
  
  public String getDescription() {
      return description;
  }
  
  public String getOrganizingBody() {
      return organizingBody;
  }
  
  public Temporal.DateTime getStartDate() {
      return startDate;
  }
  
  public Temporal.DateTime getEndDate() {
      return endDate;
  }
  
  public Double getTotalPrizeMoney() {
      return totalPrizeMoney;
  }
  
  public List<TournamentBracket> getArcToBrackets() {
      return ArcToBrackets;
  }
  
  private TournamentArc(String id, String tournamenteventID, String arcName, String description, String organizingBody, Temporal.DateTime startDate, Temporal.DateTime endDate, Double totalPrizeMoney) {
    this.id = id;
    this.tournamenteventID = tournamenteventID;
    this.arcName = arcName;
    this.description = description;
    this.organizingBody = organizingBody;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrizeMoney = totalPrizeMoney;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      TournamentArc tournamentArc = (TournamentArc) obj;
      return ObjectsCompat.equals(getId(), tournamentArc.getId()) &&
              ObjectsCompat.equals(getTournamenteventId(), tournamentArc.getTournamenteventId()) &&
              ObjectsCompat.equals(getArcName(), tournamentArc.getArcName()) &&
              ObjectsCompat.equals(getDescription(), tournamentArc.getDescription()) &&
              ObjectsCompat.equals(getOrganizingBody(), tournamentArc.getOrganizingBody()) &&
              ObjectsCompat.equals(getStartDate(), tournamentArc.getStartDate()) &&
              ObjectsCompat.equals(getEndDate(), tournamentArc.getEndDate()) &&
              ObjectsCompat.equals(getTotalPrizeMoney(), tournamentArc.getTotalPrizeMoney());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getTournamenteventId())
      .append(getArcName())
      .append(getDescription())
      .append(getOrganizingBody())
      .append(getStartDate())
      .append(getEndDate())
      .append(getTotalPrizeMoney())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("TournamentArc {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("tournamenteventID=" + String.valueOf(getTournamenteventId()) + ", ")
      .append("arcName=" + String.valueOf(getArcName()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("organizingBody=" + String.valueOf(getOrganizingBody()) + ", ")
      .append("startDate=" + String.valueOf(getStartDate()) + ", ")
      .append("endDate=" + String.valueOf(getEndDate()) + ", ")
      .append("totalPrizeMoney=" + String.valueOf(getTotalPrizeMoney()))
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
  public static TournamentArc justId(String id) {
    try {
      UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
    } catch (Exception exception) {
      throw new IllegalArgumentException(
              "Model IDs must be unique in the format of UUID. This method is for creating instances " +
              "of an existing object with only its ID field for sending as a mutation parameter. When " +
              "creating a new object, use the standard builder method and leave the ID field blank."
      );
    }
    return new TournamentArc(
      id,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      tournamenteventID,
      arcName,
      description,
      organizingBody,
      startDate,
      endDate,
      totalPrizeMoney);
  }
  public interface BuildStep {
    TournamentArc build();
    BuildStep id(String id) throws IllegalArgumentException;
    BuildStep tournamenteventId(String tournamenteventId);
    BuildStep arcName(String arcName);
    BuildStep description(String description);
    BuildStep organizingBody(String organizingBody);
    BuildStep startDate(Temporal.DateTime startDate);
    BuildStep endDate(Temporal.DateTime endDate);
    BuildStep totalPrizeMoney(Double totalPrizeMoney);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String tournamenteventID;
    private String arcName;
    private String description;
    private String organizingBody;
    private Temporal.DateTime startDate;
    private Temporal.DateTime endDate;
    private Double totalPrizeMoney;
    @Override
     public TournamentArc build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new TournamentArc(
          id,
          tournamenteventID,
          arcName,
          description,
          organizingBody,
          startDate,
          endDate,
          totalPrizeMoney);
    }
    
    @Override
     public BuildStep tournamenteventId(String tournamenteventId) {
        this.tournamenteventID = tournamenteventId;
        return this;
    }
    
    @Override
     public BuildStep arcName(String arcName) {
        this.arcName = arcName;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
        return this;
    }
    
    @Override
     public BuildStep organizingBody(String organizingBody) {
        this.organizingBody = organizingBody;
        return this;
    }
    
    @Override
     public BuildStep startDate(Temporal.DateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    
    @Override
     public BuildStep endDate(Temporal.DateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    
    @Override
     public BuildStep totalPrizeMoney(Double totalPrizeMoney) {
        this.totalPrizeMoney = totalPrizeMoney;
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
    private CopyOfBuilder(String id, String tournamenteventId, String arcName, String description, String organizingBody, Temporal.DateTime startDate, Temporal.DateTime endDate, Double totalPrizeMoney) {
      super.id(id);
      super.tournamenteventId(tournamenteventId)
        .arcName(arcName)
        .description(description)
        .organizingBody(organizingBody)
        .startDate(startDate)
        .endDate(endDate)
        .totalPrizeMoney(totalPrizeMoney);
    }
    
    @Override
     public CopyOfBuilder tournamenteventId(String tournamenteventId) {
      return (CopyOfBuilder) super.tournamenteventId(tournamenteventId);
    }
    
    @Override
     public CopyOfBuilder arcName(String arcName) {
      return (CopyOfBuilder) super.arcName(arcName);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
    }
    
    @Override
     public CopyOfBuilder organizingBody(String organizingBody) {
      return (CopyOfBuilder) super.organizingBody(organizingBody);
    }
    
    @Override
     public CopyOfBuilder startDate(Temporal.DateTime startDate) {
      return (CopyOfBuilder) super.startDate(startDate);
    }
    
    @Override
     public CopyOfBuilder endDate(Temporal.DateTime endDate) {
      return (CopyOfBuilder) super.endDate(endDate);
    }
    
    @Override
     public CopyOfBuilder totalPrizeMoney(Double totalPrizeMoney) {
      return (CopyOfBuilder) super.totalPrizeMoney(totalPrizeMoney);
    }
  }
  
}
